import { FormControl, ValidationErrors } from "@angular/forms";

export class Spacevalidator {
   static notOnlySpaces(control:FormControl):ValidationErrors {
        if(control.value!=null && control.value.trim().length<6){
            return {'spaces':true};
        }else{
            return null;
        }
    }
}
