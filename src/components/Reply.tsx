"use client";

import { ReplyProps } from "@/libs/types";

export default function Reply({ ImagePath, username, replyTitle, likes }:ReplyProps ) {
  return <div className="d-flex gap-2 my-2 ps-5">
  <img
    src="/profileImages/puppy.jpg"
    width="48"
    height="48"
    className="rounded-circle"
    style={{ objectFit: "cover" }}
  />
  <div
    className="rounded rounded-3 p-2"
    style={{ backgroundColor: "#E5E7EB" }}
  >
    <span className="fw-semibold">หมาน้อย</span>
    <br />
    <span>จริงค้าบบบบบบบบ</span>
    <div className="d-flex align-items-center gap-1">
    </div>
  </div>
</div>
}
