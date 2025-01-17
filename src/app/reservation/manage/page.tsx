"use client";
import { useSession } from "next-auth/react";

export default function MyReservationPage() {
  const { data: session } = useSession();
  console.log(session?.user.name);
  console.log(session);
  return (
    <>
      <div>Hello my reservation</div>
      {session ? (
        <div>User: {session.user.name}</div>
      ) : (
        <div>Session is not active</div>
      )}
    </>
  );
}
