import { SpellInterface } from "./SpellInterface"

export interface SpellDetailInterface {
    index: string
    name: string
    url: string
    desc: [string]
    higher_level?: [string]
    range?: string
    components?: [string]
    material?: string
    ritual?: boolean
    duration?: string
    concentration?: boolean
    casting_time?: string
    level?: number
    attack_type?: string
    damage?: {
        damage_at_slot_level: any
        damage_type: SpellInterface
    }
    school?: SpellInterface
    classes?: SpellInterface[]
    subclasses?: SpellInterface[]
}