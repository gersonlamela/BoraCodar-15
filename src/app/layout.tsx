import './globals.css';

export const metadata = {
	title: 'BoraCodar#15',
	description: 'Tabela de Preços',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap" rel="stylesheet" />
			</head>
			<body>{children}</body>
		</html>
	);
}
