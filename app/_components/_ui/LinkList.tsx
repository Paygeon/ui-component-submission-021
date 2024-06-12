"use client";

import { useState, useEffect } from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/ui/Collapsible';
import Link from 'next/link';
import { Button } from '@/ui/Button';
import { Label } from '@/ui/Label';
import { Input } from '@/ui/Input';

/**
 * THIS IS THE COMPONENT THAT WILL BE USED TO UPLOAD LINKS TO THE DATABASE
 * @params links: Array of links
 * @params onUpdateLinks: Function to update links
 * @params heading: Heading
 * 
  */




export default function LinkedList({ links, onUpdateLinks , heading }) {
  const [items, setItems] = useState(links);
  const [newItem, setNewItem] = useState({ label: '', href: '' });
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    setItems(links);
  }, [links]);

  const handleAddItem = () => {
    if (newItem.label.trim() && newItem.href.trim()) {
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      onUpdateLinks(updatedItems);
      setNewItem({ label: '', href: '' });
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
    onUpdateLinks(updatedItems);
    setEditingIndex(-1);
    setNewItem({ label: '', href: '' });
  };

  const handleCancelEdit = () => {
    setEditingIndex(-1);
    setNewItem({ label: '', href: '' });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{heading}</h2>
      <p className="text-gray-500 mb-6">Manage your list of links. Click on an item to edit, or add a new one.</p>
      <div className="space-y-4">
        {items.map((item, index) => (
          <Collapsible key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <CollapsibleTrigger className="flex items-center justify-between px-4 py-3 cursor-pointer">
              <div className="flex items-center space-x-3">
                <LinkIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="font-medium">{item.label}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Link
                  href={item.href}
                  target="_blank"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  prefetch={false}
                >
                  <ExternalLinkIcon className="w-5 h-5" />
                </Link>
                <Button variant="ghost" size="sm" onClick={() => handleEditItem(index)}>
                  <FilePenIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Button>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-3 border-t dark:border-gray-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`label-${index}`}>Label</Label>
                  <Input
                    id={`label-${index}`}
                    value={editingIndex === index ? newItem.label : item.label}
                    onChange={(e) => setNewItem({ ...newItem, label: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`link-${index}`}>Link</Label>
                  <Input
                    id={`link-${index}`}
                    value={editingIndex === index ? newItem.href : item.href}
                    onChange={(e) => setNewItem({ ...newItem, href: e.target.value })}
                  />
                </div>
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
              <span className="font-medium">Add New Link</span>
            </div>
            <div className="flex items-center space-x-3">
              <Input
                type="text"
                placeholder="Label"
                value={newItem.label}
                onChange={(e) => setNewItem({ ...newItem, label: e.target.value })}
                className="bg-transparent border-none focus:ring-0 dark:text-gray-300"
              />
              <Input
                type="text"
                placeholder="Link"
                value={newItem.href}
                onChange={(e) => setNewItem({ ...newItem, href: e.target.value })}
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
function ExternalLinkIcon(props) {
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
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
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
  )
}


function LinkIcon(props) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
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
  )
}