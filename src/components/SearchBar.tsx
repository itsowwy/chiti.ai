import { SearchOutlined } from '@ant-design/icons';
import { Input } from "antd"

function SearchBar() {
  return (
    <form className='bg-backgroundColor w-full border-2 border-primaryColor h-[50px] rounded-[10px] '>
      <Input
        size="large"
        placeholder="Search"
        prefix={<SearchOutlined />}
        className='h-full bg-trasparent border-none outline-none'
      />
    </form>
  )
}

export default SearchBar
