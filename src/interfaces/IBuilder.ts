
import { AbstractBoardComponent } from "../models/abstracts/abstract_boardcomponent";

//
// An object that can build another complex object
//

export interface IBuilder {
    
    build(
        data: any, 
        width: number, 
        height: number
    ): AbstractBoardComponent;

}
