import { Pipe, PipeTransform } from '@angular/core';
import { Rating } from "../class/post.class";

@Pipe({
    name: 'calculateRating'
})
export class CalculateRating implements PipeTransform {
    transform(rates: Rating[]) {
        if (!rates) {
          return null;
        }
        let sum = 0, count = 0;
        for (let i = 0; i < rates.length; i++) {
            sum += rates[i].rating;
            count ++;
        }
        console.log(sum/count);
        return sum/count;
    }
}