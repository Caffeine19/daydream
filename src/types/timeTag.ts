export const TagColorOption = {
  //default value
  zinc: {
    backgroundColor: {
      transparent: 'bg-zinc-500/10 dark:bg-zinc-300/10',
      solid: 'bg-zinc-500 dark:bg-zinc-300'
    },
    textColor: ' text-zinc-500 dark:text-zinc-300',
    borderColor: 'border-zinc-500 dark:border-zinc-300 '
  },
  pink: {
    backgroundColor: {
      transparent: 'bg-pink-500/10 dark:bg-pink-300/10',
      solid: 'bg-pink-500 dark:bg-pink-300'
    },
    textColor: 'text-pink-500 dark:text-pink-300',
    borderColor: 'border-pink-500 dark:border-pink-300 '
  },
  sky: {
    backgroundColor: {
      transparent: 'bg-sky-500/10 dark:bg-sky-300/10',
      solid: 'bg-sky-500 dark:bg-sky-300'
    },
    textColor: ' text-sky-500 dark:text-sky-300',
    borderColor: 'border-sky-500 dark:border-sky-300 '
  },
  lime: {
    backgroundColor: {
      transparent: 'bg-lime-500/10 dark:bg-lime-300/10',
      solid: 'bg-lime-500 dark:bg-lime-300'
    },
    textColor: ' text-lime-500 dark:text-lime-300',
    borderColor: 'border-lime-500 dark:border-lime-300 '
  },
  orange: {
    backgroundColor: {
      transparent: 'bg-orange-500/10 dark:bg-orange-300/10',
      solid: 'bg-orange-500 dark:bg-orange-300'
    },
    textColor: ' text-orange-500 dark:text-orange-300',
    borderColor: 'border-orange-500 dark:border-orange-300'
  },
  yellow: {
    backgroundColor: {
      transparent: 'bg-yellow-500/10 dark:bg-yellow-300/10',
      solid: 'bg-yellow-500 dark:bg-yellow-300'
    },
    textColor: ' text-yellow-500 dark:text-yellow-300',
    borderColor: 'border-yellow-500 dark:border-yellow-300 '
  },
  rose: {
    backgroundColor: {
      transparent: 'bg-rose-500/10 dark:bg-rose-300/10',
      solid: 'bg-rose-500 dark:bg-rose-300'
    },
    textColor: ' text-rose-500 dark:text-rose-300',
    borderColor: 'border-rose-500 dark:border-rose-300 '
  },
  red: {
    backgroundColor: {
      transparent: 'bg-red-500/10 dark:bg-red-300/10',
      solid: 'bg-red-500 dark:bg-red-300'
    },
    textColor: ' text-red-500 dark:text-red-300',
    borderColor: 'border-red-500 dark:border-red-300 '
  },
  cyan: {
    backgroundColor: {
      transparent: 'bg-cyan-500/10 dark:bg-cyan-300/10',
      solid: 'bg-cyan-500 dark:bg-cyan-300'
    },
    textColor: ' text-cyan-500 dark:text-cyan-300',
    borderColor: 'border-cyan-500 dark:border-cyan-300 '
  },
  violet: {
    backgroundColor: {
      transparent: 'bg-violet-500/10 dark:bg-violet-300/10',
      solid: 'bg-violet-500 dark:bg-violet-300'
    },
    textColor: ' text-violet-500 dark:text-violet-300',
    borderColor: 'border-violet-500 dark:border-violet-300 '
  },
  emerald: {
    backgroundColor: {
      transparent: 'bg-emerald-500/10 dark:bg-emerald-300/10',
      solid: 'bg-emerald-500 dark:bg-emerald-300'
    },
    textColor: ' text-emerald-500 dark:text-emerald-300',
    borderColor: 'border-emerald-500 dark:border-emerald-300 '
  },
  teal: {
    backgroundColor: {
      transparent: 'bg-teal-500/10 dark:bg-teal-300/10',
      solid: 'bg-teal-500 dark:bg-teal-300'
    },
    textColor: ' text-teal-500 dark:text-teal-300',
    borderColor: 'border-teal-500 dark:border-teal-300 '
  }
}

export interface TimeTag {
  id: string
  name: string
  color: keyof typeof TagColorOption
}
