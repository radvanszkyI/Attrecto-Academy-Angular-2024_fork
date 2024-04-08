import { Pipe, PipeTransform } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";

@Pipe({
    name: 'isControlRequired',
    pure: false
})

export class IsControlRequiredPipe implements PipeTransform {
    // megkapja a formGroup-ot az előző pipe-ból
    //         +a value-t, ami egy plusz input 
    transform(fromGroup: FormGroup, value: string): boolean {
        //megnézük hogy van e rajta "required" validáció -> ha igen AKKOR true KÜÖNBEN false
        return fromGroup.get(value).hasValidator(Validators.required)
    }
}
