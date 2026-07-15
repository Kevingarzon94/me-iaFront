import type { Route } from './+types/home'
import { Welcome } from '~/pages/Home/Welcome'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Home IA-ME' },
    {
      name: 'IA for chat about Kevin Garzon skills',
      content: 'IA chat Developer',
    },
  ]
}

export default function Home() {
  return <Welcome />
}
