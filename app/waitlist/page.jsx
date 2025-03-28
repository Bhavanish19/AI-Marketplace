"use client";

import React from "react";
import Head from "next/head";

// export default function WaitlistPage() {
//   return (
//     <>
//       <Head>
//         <title>Waitlist</title>
//       </Head>
//       <div className="mt-20 fixed w-full">
//         <div className="aspect-video w-full">Add iframe here</div>
//       </div>
//     </>
//   );
// }

const WaitlistPage = () => {
  return (
    <div>
      <div>
        <iframe
          style={{ width: "100%" }}
          height="569"
          src="https://carpool-waitlist.created.app"
          title="CarPool Waitlist"
          frameBorder="0">
        </iframe>
      </div>
    </div>
  );
};