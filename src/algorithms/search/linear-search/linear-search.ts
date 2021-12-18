export default class LinearSearch {
  public static search(array: Array<number>, wanted: number): Array<number> {
    const found: number[] = [];
    array.forEach((item: number) => {
      if (LinearSearch.comparator(item, wanted) === 0) {
        found.push(item);
      }
    });
    return found;
  }

  private static comparator(a: number, b: number): number {
    return a - b;
  }
}
