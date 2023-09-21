export const enum TagColorOption {
  pink = 'bg-pink-500/10 text-pink-500',
  sky = 'bg-sky-500/10 text-sky-500',
  lime = 'bg-lime-500/10 text-lime-500',
  orange = 'bg-orange-500/10 text-orange-500',
  yellow = 'bg-yellow-500/10 text-yellow-500'
}

export interface TimeTag {
  id: number
  name: string
  color: TagColorOption
}
