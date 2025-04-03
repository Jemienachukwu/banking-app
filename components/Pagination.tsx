"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  page: number;
  totalPages: number;
}

const Pagination = ({ page, totalPages }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNavigation = (type: "prev" | "next") => {
    const pageNumber = type === "prev" ? page - 1 : page + 1;

    // Update the "page" query parameter in the URL
    const params = new URLSearchParams(searchParams?.toString());
    params.set("page", pageNumber.toString());

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <Button
        onClick={() => handleNavigation("prev")}
        className="p-0 hover:bg-transparent"
        disabled={page <= 1}
        variant="ghost"
        size="sm"
      >
        <Image
          src="/icons/arrow-left.svg"
          alt="arrow"
          width={20}
          height={20}
          className="mr-2"
        />
        Previous
      </Button>
      <p className="text-sm">
        Page {page} of {totalPages}
      </p>
      <Button
        onClick={() => handleNavigation("next")}
        className="p-0 hover:bg-transparent"
        disabled={page >= totalPages}
        variant="ghost"
        size="sm"
      >
        Next
        <Image
          src="/icons/arrow-left.svg"
          alt="arrow"
          width={20}
          height={20}
          className="ml-2 -scale-x-100"
        />
      </Button>
    </div>
  );
};

export default Pagination;
