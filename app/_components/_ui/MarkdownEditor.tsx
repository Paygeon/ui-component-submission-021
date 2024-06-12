"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/ui/Button"
import { Textarea } from "@/ui/Textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/ui/Dialog"
import { MDXProvider } from '@mdx-js/react'
import { compile } from '@mdx-js/mdx'
import { run } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import { ResponsiveLine } from "@nivo/line"
import * as React from 'react'
import { CUSTOM_MDX_COMPONENTS } from "@/app/_constants/mdx-components"
import debounce from 'lodash.debounce'
import {toast} from 'sonner'

const components = CUSTOM_MDX_COMPONENTS

const initialState = `
<SubSectionOuterContainer id="Docs">
  <SubSectionTitle>Step-By-Step Guide</SubSectionTitle>
  <SubSectionInnerContainer className="border-l-2 border-gray-300 space-y-12 max-w-5xl mt-4 px-1 pl-10 items-start overflow-x-hidden">
    <HowToStep index='1' title="Install Dependencies">
      Icons by Lucide. But you can use any or none.
      <CodeBlock fileName="cli">
        \`\`\`bash
        npm install lucide-react
        \`\`\`
      </CodeBlock>
      Button component by [shadcn/ui](https://ui.shadcn.com/docs/components/button)
      <CodeBlock fileName="cli">
        \`\`\`bash
        npx shadcn-ui@latest add button
        \`\`\`
      </CodeBlock>
      Copy the function 'cn'. Link -> [cn Function](https://boilerplatehq.com/functions/cn)
    </HowToStep>
    <HowToStep index='2' title="Copy the Source Code">
      <CodeBlock fileName="@/component/button-back-to-top.tsx">
        \`\`\`tsx

        \`\`\`
      </CodeBlock>
    </HowToStep>
    <HowToStep index='3' title="Use in your App">
      <CodeBlock fileName="page.tsx">
        \`\`\`tsx

        \`\`\`
      </CodeBlock>
    </HowToStep>
  </SubSectionInnerContainer>
</SubSectionOuterContainer>
`


/** 
  * This function takes markdown content and converts it to React components using MDX.
  * It also uses the runtime to render the components.
  * @param markdown - The markdown content to convert to React components.
  */

const markdownToReact = async (markdown) => {
  const compiledSource = await compile(markdown, { outputFormat: 'function-body' })
  const { default: MDXContent } = await run(compiledSource, runtime)
  return <MDXContent components={components} />
}

export default function MarkdownEditor({ handleMarkdownSubmit }) {
  const [markdown, setMarkdown] = useState(initialState)
  const [showModal, setShowModal] = useState(false)
  const [selectedComponent, setSelectedComponent] = useState(null)
  const [renderedContent, setRenderedContent] = useState(null)

  const updatePreview = useCallback(
    debounce(async (newMarkdown) => {
      const rendered = await markdownToReact(newMarkdown)
      setRenderedContent(rendered)
    }, 300),
    []
  )

  useEffect(() => {
    updatePreview(markdown)
  }, [markdown, updatePreview])

  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }

  const handleInsertComponent = () => {
    setShowModal(true)
  }

  const handleSelectComponent = (component) => {
    setSelectedComponent(component)
    setShowModal(false)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/2 border-r p-6 overflow-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold dark:text-white">Markdown Editor</h1>
          <Button onClick={() => handleMarkdownSubmit(markdown)}>Set Markdown</Button>
        </div>
        <Textarea
          value={markdown}
          onChange={handleChange}
          className="w-full h-full resize-none border-none focus:ring-0 dark:text-white"
        />
        {showModal && (
          <Dialog open={showModal} onOpenChange={handleCloseModal}>
            <DialogContent className="w-[600px] p-6">
              <DialogHeader>
                <DialogTitle>Insert Component</DialogTitle>
                <DialogDescription>Select a component to insert into your markdown.</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                {Object.keys(components).map((key) => (
                  <Button key={key} onClick={() => handleSelectComponent(components[key])}>
                    {key}
                  </Button>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
      <div className="w-1/2 p-6 overflow-auto">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Preview</h2>
        <MDXProvider components={components}>
          {renderedContent}
        </MDXProvider>
      </div>
    </div>
  )
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}
