import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";
export default function Widgets() {
  return (
    <section className="px-2 mt-2 hidden lg:inline col-span-2">
      <div className="flex items-center space-x-2 mt-2 bg-gray-100 p-3">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent outline-none"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="sonnysangha"
        
        options={{
            innerHeight: 3000,
            
        }}
      />
    </section>
  );
}
