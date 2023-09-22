export const enum TagColorOption {
  pink = 'bg-pink-500/10 text-pink-500 dark:bg-pink-300/10 dark:text-pink-300',
  sky = 'bg-sky-500/10 text-sky-500 dark:bg-sky-300/10 dark:text-sky-300',
  lime = 'bg-lime-500/10 text-lime-500 dark:bg-lime-300/10 dark:text-lime-300',
  orange = 'bg-orange-500/10 text-orange-500 dark:bg-orange-300/10 dark:text-orange-300',
  yellow = 'bg-yellow-500/10 text-yellow-500 dark:bg-yellow-300/10 dark:text-yellow-300'
}

export interface TimeTag {
  id: number
  name: string
  color: TagColorOption
}
