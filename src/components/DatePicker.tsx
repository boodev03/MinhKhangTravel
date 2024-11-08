"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { vi } from "date-fns/locale";

interface IProps {
  className?: string;
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
}

export function DatePickerWithRange({ className, date, setDate }: IProps) {
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <label className="block text-gray-800 font-medium mb-2">
        Chọn ngày bắt đầu - kết thúc
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd-MM-yyyy", { locale: vi })} -{"> "}
                  {format(date.to, "dd-MM-yyyy", { locale: vi })}
                </>
              ) : (
                format(date.from, "dd-MM-yyyy", { locale: vi })
              )
            ) : (
              <span>Chọn ngày</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={1}
            locale={vi}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
