import React from 'react';
import { Admin } from '@repo/ui/admin';

import { Button } from '@repo/ui/button';
import { Code } from '@repo/ui/code';
import styles from './../page.module.css';

export default function Page(): JSX.Element {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					examples/basic&nbsp;
					<Code className={styles.code}>web</Code>
				</p>
			</div>

			<Button appName="web" className={styles.button}>
				Click me!
			</Button>

			<Admin appName="Admin" className={styles.button} />
		</main>
	);
}
