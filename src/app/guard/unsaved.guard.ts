import {CanDeactivate} from "@angular/router";
import {ProductComponent} from "../product/product.component";
import {window} from "rxjs/operator/window";
/**
 * Created by mr on 2017/4/27.
 */
export class UnsavedGuard implements CanDeactivate<ProductComponent> {
    canDeactivate(component:ProductComponent){
         var r=confirm("你還沒有保存 确认退出吗？");
           return r;
    }
}