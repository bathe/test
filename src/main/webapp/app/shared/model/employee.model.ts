export interface IEmployee {
  id?: number;
  name?: string;
  dept?: string;
}

export class Employee implements IEmployee {
  constructor(public id?: number, public name?: string, public dept?: string) {}
}
