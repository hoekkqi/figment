import '../styles/global.sass';
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { useEffect, useState } from 'react';
import Nav from "../components/Nav";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
	const [themeType, setThemeType] = useState('light')
	useEffect(() => {
		const md = window.matchMedia('(prefers-color-scheme: dark)')
		setThemeType(lastThemeType => (md.matches ? 'dark' : 'light'))

		const handler = event => {
			setThemeType(lastThemeType => (event.matches ? 'dark' : 'light'))
		}

		try {
			// Chrome & Firefox
			md.addEventListener('change', handler);
		} catch (e1) {
			try {
				// Safari
				md.addListener(handler);
			} catch (e2) {
				console.error(e2);
			}
		}
	}, [])

	pageProps.theme = themeType
	return (
		<GeistProvider theme={{ type: themeType }}>
			<Head>
				<title>HIMBOLION</title>
			</Head>
			<CssBaseline />
			<Nav />
			<Component {...pageProps} />

		</GeistProvider>)
	// ;
}
