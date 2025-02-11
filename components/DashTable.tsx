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
      <h1 className="font-bold text-3xl">Minha Dieta</h1>
      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input className="w-auto" name="id" placeholder="Nome do Alimento" />
          <Input
            className="w-auto"
            name="cal"
            placeholder="Calorias do Alimento"
          />
          <Button type="submit" variant="ghost">
            <Search className="w-4 h-4 mr-1" />
            Filtrar
          </Button>
        </form>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-1" />
              Novo Alimento
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Alimento</DialogTitle>
              <DialogDescription>
                Adicione um novo alimento na sua dieta
              </DialogDescription>
            </DialogHeader>

            <form className="space-y-6" action="">
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="name">Alimento</Label>
                <Input className="col-span-3" id="name"></Input>
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="qty">Quantidade</Label>
                <Input className="col-span-3" id="qty"></Input>
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="cal">Calorias</Label>
                <Input className="col-span-3" id="cal"></Input>
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="pro">Proteínas</Label>
                <Input className="col-span-3" id="pro"></Input>
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="carb">Carboídratos</Label>
                <Input className="col-span-3" id="carb"></Input>
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="fat">Gorduras</Label>
                <Input className="col-span-3" id="fat"></Input>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                </DialogClose>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>Alimento</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Calorias</TableHead>
            <TableHead>Proteínas</TableHead>
            <TableHead>Carboidratos</TableHead>
            <TableHead>Gorduras</TableHead>
          </TableHeader>
          <TableBody>
            {meals?.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell> {item.name}</TableCell>
                  <TableCell> {item.quantity}</TableCell>
                  <TableCell> {item.calories}</TableCell>
                  <TableCell> {item.proteins}</TableCell>
                  <TableCell> {item.carbs}</TableCell>
                  <TableCell> {item.fats}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
