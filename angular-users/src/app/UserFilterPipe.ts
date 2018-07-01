import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
    name: 'userFilter',
    pure: false
})
export class UserFilterPipe implements PipeTransform {
    transform(users: any[], searchText: string): any {
		if(!users) return [];
		if(!searchText) return users;
        
		/**if (!users || !userFilter) {
            return users;
        }*/
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        //return items.filter(item => item.title.indexOf(filter.name) !== -1);
        //return items.filter(item => item.title.indexOf(filter.nomeCompleto) !== -1);
		searchText = searchText.toLowerCase();
		return users.filter( it => {
			return it.nomeCompleto.toLowerCase().includes(searchText);//.
		});
    }
}
