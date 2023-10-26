import { useState } from "react";

interface HeaderItemProps {
  label: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
}
export default function HeaderItem({ Icon, label }: HeaderItemProps) {
  return (
    <div
      className="group flex flex-col items-center justify-center cursor-pointer
    w-12 sm:w-18 md:w-20  hover:text-white"
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="uppercase tracking-widest group-hover:opacity-100 opacity-0">
        {label}
      </p>
    </div>
  );
}
