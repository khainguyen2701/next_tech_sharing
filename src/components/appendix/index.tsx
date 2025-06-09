"use client";
import React, { useState } from "react";

type TreeNode = {
  id: string;
  label: string;
  children?: TreeNode[];
};

interface TreeProps {
  data: TreeNode[];
}

function TreeNodeItem({ node }: { node: TreeNode }) {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <li className='mb-1'>
      <div className='flex cursor-pointer select-none items-center'>
        <span className='text-gray-800 hover:text-green-300'>{`${node.id}. ${node.label}`}</span>
      </div>

      {hasChildren && (
        <ul className='ml-5 mt-1 border-l border-gray-300 pl-3'>
          {node.children!.map((child) => (
            <TreeNodeItem key={child.id} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

const Appendix = ({ data }: TreeProps) => {
  return (
    <div className='sticky top-[5rem] max-w-md rounded bg-white p-4 shadow-sm'>
      <ul>
        {data.map((node) => (
          <TreeNodeItem key={node.id} node={node} />
        ))}
      </ul>
    </div>
  );
};

export default Appendix;
