import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterStr: string) {
    if (value.length === 0 || filterStr === "") return value;

    const data = [];
    for (const user of value) {
      if (user["name"].includes(filterStr)) {
        data.push(user);
      }
    }
    return data;
  }
}
