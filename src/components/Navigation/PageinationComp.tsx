import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  previous: string;
  next: string;
}

const PaginationComp = ({ previous, next }: Props) => {
  return (
    <>
      <Pagination>
        <PaginationContent className=" my-2 bg-secondary rounded-md">
          <PaginationItem>
            <PaginationPrevious href={previous} className="hover:text-secondary cursor-pointer" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={next} className="hover:text-secondary cursor-pointer" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default PaginationComp;