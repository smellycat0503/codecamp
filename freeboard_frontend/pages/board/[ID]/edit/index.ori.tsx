import { useRouter } from "next/router";
import UpdateBoard from "../../update";

export default function TTTPage() {
  const router = useRouter();
  console.log(router);

  return <UpdateBoard />;
}
//! 여기는 상세페이지에서 수정하기 눌렀을때 경로?
