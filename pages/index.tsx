import GetDataAtMount1 from "../components/GetDataAtMount1"
import GetDataAtMount2 from "../components/GetDataAtMount2"
import GetDataAtMount3 from "../components/GetDataAtMount3"
import GetDataAtMount4 from "../components/GetDataAtMount4"
import PostData1 from "../components/PostData1"
import PostData2 from "../components/PostData2"

import Practice1 from "../components/Practice1"
import Practice2 from "../components/Practice2"
import Practice3 from "../components/Practice3"

export default function Page() {
  return (
    <>
      <div>
        {/* 가능한 예시 모음 */}
        <GetDataAtMount1 />
        <GetDataAtMount2 />
        <GetDataAtMount3 />
        <GetDataAtMount4 />
        <PostData1 />
        <PostData2 />
      </div>
      <Practice1 />
      <Practice2 />
      <Practice3 />
    </>
  )
}
