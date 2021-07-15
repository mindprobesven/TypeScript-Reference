declare const stringify1: (num: number) => string;
declare const stringify2: (num: number) => string;
declare const stringify3: (num: number) => string;
declare type SomeFunctionType = (num: number) => string;
declare const stringify4: SomeFunctionType;
declare const iWillReturnUndefined1: () => void;
declare const iWillReturnUndefined2: () => void;
declare const multiply1: (num: number, multiplier?: number | undefined) => number;
declare const multiply2: (num: number, multiplier?: number) => number;
declare const joinNumbers: (...nums: number[]) => string;
