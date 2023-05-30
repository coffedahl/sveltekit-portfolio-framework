import { createHash } from 'crypto';

export function hash(string: string): string {
	const hash = createHash('md5').update(string).digest('hex');
	return hash;
}
