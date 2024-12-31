import Link from "next/link";
import React from "react";

const page = () => {
  
  return (
    <div>
      <h2 className="text2xl">Users List:</h2>
      <div className="flex flex-col gap-3">
        <ul>
          <li>
            <Link href="/dashboard/users/1">User-1</Link>
          </li>
          <li>
            <Link href="/dashboard/users/2">User-2</Link>
          </li>
          <li>
            <Link href="/dashboard/users/3">User-3</Link>
          </li>
          <li>
            <Link href="/dashboard/users/4">User-4</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
