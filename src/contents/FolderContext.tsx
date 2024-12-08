import { PlusOutlined } from "@ant-design/icons"
import { Tree } from "antd"
import type { TreeDataNode, TreeProps } from "antd"
import { INJECTORS } from "constants/Injectors"
import styleText from "data-text:../styles/style.css"
import {
  type PlasmoCSConfig,
  type PlasmoGetInlineAnchor,
  type PlasmoGetStyle
} from "plasmo"
import React, { useState } from "react"

import Folder from "~components/Folder"
import SearchBar from "~components/SearchBar"

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

export const config: PlasmoCSConfig = {
  matches: ["https://chatgpt.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => ({
  element: document.querySelector(INJECTORS.SIDEBAR_INJECTED_CLASS),
  insertPosition: "afterbegin"
})

function FolderContext() {
  // Drag Enter
  const onDragEnter: TreeProps["onDragEnter"] = (info) => {
    console.log(info)
  }

  // onDrop
  const onDrop: TreeProps["onDrop"] = (info) => {
    console.log(info) // information
    const dropkey = info.node.key
    const dragKey = info.dragNode.key
    const dropPos = info.node.pos.split("_")
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]) // the drop position relative to the drop node, inside 0, top -1, bottom 1
  }

  return (
    <div>
      {/* Search Bar */}
      <SearchBar />
      {/* Folders */}
      <div>
        {/* Folder TitleBar & ActionBar */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Folder</h3>
          <button className="cursor-pointer">
            <PlusOutlined className="text-primaryColor" />
            <span className="text-primaryColor">Add</span>
          </button>
        </div>
        {/* Folder Tree */}
        <Tree
          className="draggable-tree"
          draggable
          blockNode
          onDragEnter={onDragEnter}
          onDrop={onDrop}
        />
      </div>
    </div>
  )
}

export default FolderContext
