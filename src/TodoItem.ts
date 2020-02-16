export class TodoItem {
  // this is an example of a type annotation - tells the compiler that th id prop can only be assigned values of the 'number' type
  constructor(
    public id: number,
    public task: string,
    public complete: boolean = false
  ) {
    // no statements required
  }

  printDetails(): void {
    console.log(
      `${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`
    );
  }
}
