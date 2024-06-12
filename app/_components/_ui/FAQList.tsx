"use client";

import { useState, useEffect } from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/ui/Collapsible';
import { Button } from '@/ui/Button';
import { Label } from '@/ui/Label';
import { Input } from '@/ui/Input';
import { Textarea } from '@/ui/Textarea';


/** 
*THIS IS THE COMPONENT THAT WILL BE USED TO UPLOAD FAQS TO THE DATABASE
 * @params faqs: Array of FAQs
 * @params onUpdateFaqs: Function to update FAQs
 * @params heading: Heading
*/


export default function FAQList({ faqs, onUpdateFaqs, heading }) {
  const [items, setItems] = useState(faqs);
  const [newItem, setNewItem] = useState({ question: '', answer: '' });
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    setItems(faqs);
  }, [faqs]);

  const handleAddItem = () => {
    if (newItem.question.trim() && newItem.answer.trim()) {
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      onUpdateFaqs(updatedItems);
      setNewItem({ question: '', answer: '' });
    }
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
    setNewItem(items[index]);
  };

  const handleSaveItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index] = newItem;
    setItems(updatedItems);
    onUpdateFaqs(updatedItems);
    setEditingIndex(-1);
    setNewItem({ question: '', answer: '' });
  };

  const handleCancelEdit = () => {
    setEditingIndex(-1);
    setNewItem({ question: '', answer: '' });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{heading}</h2>
      <p className="text-gray-500 mb-6">Manage your list of FAQs. Click on an item to edit, or add a new one.</p>
      <div className="space-y-4">
        {items.map((item, index) => (
          <Collapsible key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <CollapsibleTrigger className="flex items-center justify-between px-4 py-3 cursor-pointer">
              <div className="flex items-center space-x-3">
                <span className="font-medium">{item.question}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => handleEditItem(index)}>
                <FilePenIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-3 border-t dark:border-gray-700">
              <div className="space-y-2">
                <Label htmlFor={`question-${index}`}>Question</Label>
                <Input
                  id={`question-${index}`}
                  value={editingIndex === index ? newItem.question : item.question}
                  onChange={(e) => setNewItem({ ...newItem, question: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`answer-${index}`}>Answer</Label>
                <Textarea
                  id={`answer-${index}`}
                  value={editingIndex === index ? newItem.answer : item.answer}
                  onChange={(e) => setNewItem({ ...newItem, answer: e.target.value })}
                />
              </div>
              <div className="flex justify-end mt-4 space-x-2">
                {editingIndex === index ? (
                  <>
                    <Button variant="outline" onClick={handleCancelEdit}>
                      Cancel
                    </Button>
                    <Button onClick={() => handleSaveItem(index)}>Save</Button>
                  </>
                ) : (
                  <Button variant="outline" onClick={() => handleEditItem(index)}>
                    Edit
                  </Button>
                )}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-3">
              <PlusIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="font-medium">Add New FAQ</span>
            </div>
            <div className="flex items-center space-x-3">
              <Input
                type="text"
                placeholder="Question"
                value={newItem.question}
                onChange={(e) => setNewItem({ ...newItem, question: e.target.value })}
                className="bg-transparent border-none focus:ring-0 dark:text-gray-300"
              />
              <Textarea
                placeholder="Answer"
                value={newItem.answer}
                onChange={(e) => setNewItem({ ...newItem, answer: e.target.value })}
                className="bg-transparent border-none focus:ring-0 dark:text-gray-300"
              />
              <Button onClick={handleAddItem}>Add</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
