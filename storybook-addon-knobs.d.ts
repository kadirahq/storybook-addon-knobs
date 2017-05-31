import * as React from 'react';

interface KnobOption<T> {
	value: T,
	type: 'text' | 'boolean' | 'number' | 'color' | 'object' | 'array' | 'select' | 'date',
}

interface StoryContext {
	kind: string,
	story: string,
}

export function knob<T>(name: string, options: KnobOption<T>): T;

export function text(name: string, value: string | null): string;

export function boolean(name: string, value: boolean): boolean;

export function number(name: string, value: number): number;

export function color(name: string, value: string): string;

export function object<T>(name: string, value: T): T;

export function select<T>(name: string, options: { [s: string]: T }, value: string): T;
export function select<T>(name: string, options: T[], value: T): T;

export function array<T>(name: string, value: T[], separator: string): T[];

export function date(name: string, value?: Date): Date;

export function array(name: string, defaultValue?: string[]): string[];

interface IWrapStoryProps {
  context?: Object;
  storyFn?: Function;
  channel?: Object;
  knobStore?: Object;
  initialContent?: Object;
}

export function withKnobs(storyFn: Function, context: StoryContext): React.ReactElement<IWrapStoryProps>;
