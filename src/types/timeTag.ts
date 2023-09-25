export const TagColorOption = {
  pink: {
    backgroundColor: 'bg-pink-500/10 dark:bg-pink-300/10',
    textColor: ' text-pink-500 dark:text-pink-300',
    borderColor: 'border-pink-500 dark:border-pink-300 '
  },
  sky: {
    backgroundColor: 'bg-sky-500/10 dark:bg-sky-300/10',
    textColor: ' text-sky-500 dark:text-sky-300',
    borderColor: 'border-sky-500 dark:border-sky-300 '
  },
  lime: {
    backgroundColor: 'bg-lime-500/10 dark:bg-lime-300/10',
    textColor: ' text-lime-500 dark:text-lime-300',
    borderColor: 'border-lime-500 dark:border-lime-300 '
  },
  orange: {
    backgroundColor: 'bg-orange-500/10 dark:bg-orange-300/10',
    textColor: ' text-orange-500 dark:text-orange-300',
    borderColor: 'border-orange-500 dark:border-orange-300 '
  },
  yellow: {
    backgroundColor: 'bg-yellow-500/10 dark:bg-yellow-300/10',
    textColor: ' text-yellow-500 dark:text-yellow-300',
    borderColor: 'border-yellow-500 dark:border-yellow-300 '
  },
  //default value
  zinc: {
    backgroundColor: 'bg-zinc-500/10 dark:bg-zinc-300/10',
    textColor: ' text-zinc-500 dark:text-zinc-300',
    borderColor: 'border-zinc-500 dark:border-zinc-300 '
  }
}

export interface TimeTag {
  id: number
  name: string
  color: keyof typeof TagColorOption
}
