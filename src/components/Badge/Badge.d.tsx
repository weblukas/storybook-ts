import { BADGE_SIZE } from "../../enums";

export default interface IBadge {
    color?: 'selected' | 'notification';
    label: string;
    size: BADGE_SIZE;
}
