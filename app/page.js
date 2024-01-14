"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import CategoryList from "./components/Home/CategoryList";
import RangeSelect from "./components/Home/RangeSelect";
import SelectRating from "./components/Home/SelectRating";
import GoogleMapView from "./components/Home/GoogleMapView";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session?.user) {
      router.push("/login");
    }
  }, [session]);
  return (
    <div
      className="grid 
    grid-cols-1
    md:grid-cols-4 "
    >
      <div className="p-3">
        <CategoryList />
        <RangeSelect />
        <SelectRating />
      </div>
      <div className="col-span-3">
        <GoogleMapView />
      </div>
    </div>
  );
}
