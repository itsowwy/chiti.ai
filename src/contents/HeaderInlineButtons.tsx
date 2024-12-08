import { SparklesIcon, SquaresPlusIcon } from "@heroicons/react/24/outline"
import { INJECTORS } from "constants/Injectors"
import styleText from "data-text:../styles/style.css"
import type {
  PlasmoCSConfig,
  PlasmoGetInlineAnchor,
  PlasmoGetStyle
} from "plasmo"

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

export const config: PlasmoCSConfig = {
  matches: ["https://chatgpt.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => ({
  element: document.querySelector(INJECTORS.HEADER_INLINE_INJECTORS_CLASS),
  insertPosition: "afterbegin"
})

const HeaderInlineButtons = () => {
  return (
    <ul className="bg-red-500 text-green-500 flex items-center space-x-2 mr-2">
      <li className="header-inline-link-css">
        <button>
          <SparklesIcon className="w-6 text-black" />
        </button>
      </li>
      <li className="header-inline-link-css">
        <button>
          <SquaresPlusIcon className="w-6 text-black" />
        </button>
      </li>
    </ul>
  )
}

export default HeaderInlineButtons
