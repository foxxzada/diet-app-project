"use client";

import React from "react";
import { Search, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "./ui/table";
import { useQuery } from "@tanstack/react-query";
import { getMeals } from "@/app/data/meals";

export default function DashTable() {
  const { data: meals } = useQuery({
    queryKey: ["meals"],
    queryFn: getMeals,
  });

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="font-bold text-3xl">My Diet</h1>
      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input className="w-auto" name="id" placeholder="Food Name" />
          <Input className="w-auto" name="cal" placeholder="Food Calories" />
          <Button type="submit" variant="ghost">
            <Search className="w-4 h-4 mr-1" />
            Apply Filter
          </Button>
        </form>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-1" />
              Add Food
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Food</DialogTitle>
              <DialogDescription>Add a new food to your diet</DialogDescription>
            </DialogHeader>

            <form className="space-y-6" action="">
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="name">Food</Label>
                <Input className="col-span-3" id="name" />
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="qty">Quantity</Label>
                <Input className="col-span-3" id="qty" />
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="cal">Calories</Label>
                <Input className="col-span-3" id="cal" />
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="pro">Proteins</Label>
                <Input className="col-span-3" id="pro" />
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="carb">Carbs</Label>
                <Input className="col-span-3" id="carb" />
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="fat">Fats</Label>
                <Input className="col-span-3" id="fat" />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>Food</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Calories</TableHead>
            <TableHead>Proteins</TableHead>
            <TableHead>Carbs</TableHead>
            <TableHead>Fats</TableHead>
          </TableHeader>
          <TableBody>
            {meals?.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.calories}</TableCell>
                  <TableCell>{item.proteins}</TableCell>
                  <TableCell>{item.carbs}</TableCell>
                  <TableCell>{item.fats}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
