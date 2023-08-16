interface Names {
   name: string;
   age: number;
}

const person: Names = {
   name: 'Abril',
   age: 21,
}

const person2: Names = {
   name: 'Boli',
   age: 20,
}

interface NamesOptions {
   people: Names[];
}

function whosOlder( options: NamesOptions ): string {

   const { name } = options;


} 