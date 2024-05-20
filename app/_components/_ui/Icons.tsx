// Purpose: This file is used to define the icons used in the project.
import React from 'react';
// Import Types
import { LucideProps } from 'lucide-react';
// Import External Packages
// Import Components
// Import Functions & Actions & Hooks & State
// Import Data
// Import Assets & Icons

export const Icons = {
	ArrowDown: (props: LucideProps) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="62.63443"
			height="48.83955"
			viewBox="0 0 62.63443 48.83955"
			{...props}
		>
			<title>Arrow Down</title>
			<path
				d="M44.98697,17.27072c3.02152-4.51246,6.04304-9.02491,9.06455-13.53737h-4.31735c2.40533,3.96877,4.81066,7.93755,7.216,11.90632,.34353,.56682,.68706,1.13365,1.03059,1.70047,.69922,1.15371,2.24206,1.58614,3.42047,.89688,1.15413-.67506,1.59935-2.2614,.89688-3.42047-2.40533-3.96877-4.81066-7.93755-7.216-11.90632-.34353-.56682-.68706-1.13365-1.03059-1.70047-1.01399-1.67307-3.27826-1.55182-4.31735,0-3.02152,4.51246-6.04304,9.02491-9.06455,13.53737-.75151,1.12234-.21797,2.7684,.89688,3.42047,1.22766,.71806,2.66719,.22811,3.42047-.89688h0Z"
				fill="currentColor"
			/>
			<path
				d="M2.5,48.54032c9.98476-1.10812,19.23175-7.01358,24.027-15.93333,2.57961-4.79839,4.1285-11.12074,1.05639-16.08048-2.76184-4.45884-8.78327-6.86452-13.37808-3.572-4.65048,3.33241-5.40732,9.23623-4.16926,14.46374,.63378,2.67602,1.65266,5.29118,2.6765,7.83978,.92629,2.30578,1.9356,4.61149,3.35298,6.66419,2.95718,4.2827,7.44023,7.17352,12.79181,6.89937,5.40109-.27669,10.27355-3.15896,13.66494-7.28503,3.97582-4.83709,6.41813-10.83763,8.35242-16.73667,2.1236-6.47637,3.3803-13.21153,3.88983-20.00421,.10112-1.34804-1.2214-2.5-2.5-2.5-1.43699,0-2.39859,1.14808-2.5,2.5-.72105,9.61263-3.11196,19.4488-7.5363,28.05291-1.94694,3.78626-4.50102,7.445-8.33595,9.50003-3.33345,1.78631-7.49538,2.16839-10.71346-.0623-3.04595-2.11138-4.69295-5.8781-5.98461-9.22046-1.50713-3.89995-3.7081-8.6514-2.34844-12.87282,1.02202-3.17312,4.20143-5.00393,7.04753-2.69742,3.32838,2.69736,2.63287,7.49083,1.10972,10.98162-3.53242,8.09567-11.73046,14.08948-20.50302,15.06307-1.3418,.14892-2.5,1.04242-2.5,2.5,0,1.23594,1.14939,2.64989,2.5,2.5h0Z"
				fill="currentColor"
			/>
		</svg>
	),
	Facebook: (props: LucideProps) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<title>Facebook</title>
			<path stroke="none" d="M0 0h24v24H0z" />
			<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
		</svg>
	),
	Lucide: (props: LucideProps) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
			{...props}
		>
			<title>Lucide</title>
			<path d="M14 12C14 9.79086 12.2091 8 10 8C7.79086 8 6 9.79086 6 12C6 16.4183 9.58172 20 14 20C18.4183 20 22 16.4183 22 12C22 8.446 20.455 5.25285 18 3.05557" />
			<path d="M10 12C10 14.2091 11.7909 16 14 16C16.2091 16 18 14.2091 18 12C18 7.58172 14.4183 4 10 4C5.58172 4 2 7.58172 2 12C2 15.5841 3.57127 18.8012 6.06253 21" />
		</svg>
	),
	React: (props: LucideProps) => (
		<svg
			role="img"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>React</title>
			<path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
		</svg>
	),
	Tailwind: (props: LucideProps) => (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 33" {...props}>
			<title>Tailwind</title>
			<g clipPath="url(#prefix__clip0)">
				<path
					fillRule="evenodd"
					d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
					clipRule="evenodd"
				/>
			</g>
			<defs>
				<clipPath id="prefix__clip0">
					<path fill="#fff" d="M0 0h54v32.4H0z" />
				</clipPath>
			</defs>
		</svg>
	),
	X: (props: LucideProps) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<title>X</title>
			<path stroke="none" d="M0 0h24v24H0z" />
			<path d="M4 4l11.733 16h4.267l-11.733 -16z" />
			<path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
		</svg>
	),
	shadcn: (props: LucideProps) => (
		<svg
			role="img"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>shadcn/ui</title>
			<path d="M22.219 11.784 11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L23.695 13.26c.407-.408.407-1.069 0-1.476-.408-.407-1.069-.407-1.476 0ZM20.132.305.305 20.132c-.407.407-.407 1.068 0 1.476.408.407 1.069.407 1.476 0L21.608 1.781c.407-.407.407-1.068 0-1.476-.408-.407-1.069-.407-1.476 0Z" />
		</svg>
	),
	NextJs: (props: LucideProps) => (
		<svg
			role="img"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Next.js</title>
			<path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
		</svg>
	),
	Clerk: (props: LucideProps) => (
		<svg
			role="img"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Clerk</title>
			<path d="m21.47 20.829-2.881-2.881a.572.572 0 0 0-.7-.084 6.854 6.854 0 0 1-7.081 0 .576.576 0 0 0-.7.084l-2.881 2.881a.576.576 0 0 0-.103.69.57.57 0 0 0 .166.186 12 12 0 0 0 14.113 0 .58.58 0 0 0 .239-.423.576.576 0 0 0-.172-.453Zm.002-17.668-2.88 2.88a.569.569 0 0 1-.701.084A6.857 6.857 0 0 0 8.724 8.08a6.862 6.862 0 0 0-1.222 3.692 6.86 6.86 0 0 0 .978 3.764.573.573 0 0 1-.083.699l-2.881 2.88a.567.567 0 0 1-.864-.063A11.993 11.993 0 0 1 6.771 2.7a11.99 11.99 0 0 1 14.637-.405.566.566 0 0 1 .232.418.57.57 0 0 1-.168.448Zm-7.118 12.261a3.427 3.427 0 1 0 0-6.854 3.427 3.427 0 0 0 0 6.854Z" />
		</svg>
	),
	TypeScript: (props: LucideProps) => (
		<svg
			role="img"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>TypeScript</title>
			<path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
		</svg>
	),
	Vercel: (props: LucideProps) => (
		<svg
			role="img"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Vercel</title>
			<path d="M24 22.525H0l12-21.05 12 21.05z" />
		</svg>
	),
	Stripe: (props: LucideProps) => (
		<svg
			role="img"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Stripe</title>
			<path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
		</svg>
	),
	Umami: (props: LucideProps) => (
		<svg
			role="img"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Umami</title>
			<path d="M2.203 8.611H.857a.845.845 0 0 0-.841.841v.858a13.31 13.31 0 0 0-.016.6c0 6.627 5.373 12 12 12 6.527 0 11.837-5.212 11.996-11.701 0-.025.004-.05.004-.075V9.452a.845.845 0 0 0-.841-.841h-1.346c-1.159-4.329-5.112-7.521-9.805-7.521-4.692 0-8.645 3.192-9.805 7.521Zm18.444 0H3.37c1.127-3.702 4.57-6.399 8.638-6.399 4.069 0 7.512 2.697 8.639 6.399Z" />
		</svg>
	),
	Resend: (props: LucideProps) => (
		<svg
			role="img"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Resend</title>
			<path d="M2.023 0v24h5.553v-8.434h2.998L15.326 24h6.65l-5.372-9.258a7.652 7.652 0 0 0 3.316-3.016c.709-1.21 1.062-2.57 1.062-4.08 0-1.462-.353-2.767-1.062-3.91-.709-1.165-1.692-2.079-2.95-2.742C15.737.331 14.355 0 12.823 0Zm5.553 4.87h4.219c.731 0 1.349.125 1.851.376.526.252.925.618 1.2 1.098.274.457.412.994.412 1.611S15.132 9.12 14.88 9.6c-.229.48-.572.856-1.03 1.13-.434.252-.948.38-1.542.38H7.576Z" />
		</svg>
	),
	GitHub: (props: LucideProps) => (
		<svg
			viewBox="0 0 438.549 438.549"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fill="currentColor"
				d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
			></path>
		</svg>
	),
	Zustand: (props: LucideProps) => (
		<svg
			fill="#currentColor"
			version="1.1"
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 513.164 513.164"
			xmlSpace="preserve"
		>
			<g strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g>
				{' '}
				<g>
					{' '}
					<g>
						{' '}
						<path d="M197.818,222.255h-11.636c-12.8,0-23.273,10.473-23.273,23.273s10.473,23.273,23.273,23.273 c10.473,0,19.782-6.982,22.109-16.291c1.164,1.164,1.164,2.327,1.164,4.655v34.909c0,9.309-5.818,18.618-17.455,24.436 c-18.618,10.473-29.091,27.927-29.091,45.382c0,6.982,4.655,11.636,11.636,11.636s11.636-4.655,11.636-11.636 c0-9.309,5.818-18.618,17.455-24.436c18.618-10.473,29.091-27.927,29.091-45.382v-34.909 C232.727,237.382,217.6,222.255,197.818,222.255z"></path>{' '}
					</g>{' '}
				</g>{' '}
				<g>
					{' '}
					<g>
						{' '}
						<path d="M290.909,420.073c-9.309,0-17.455-5.818-23.273-15.127v-2.327l30.255-19.782c4.655-2.327,5.818-8.145,4.655-12.8 s-5.818-8.146-11.636-8.146h-69.818c-4.655,0-9.309,3.491-11.636,8.146c-1.164,4.655,0,10.473,4.655,12.8l30.255,19.782v2.327 c-5.818,9.309-13.964,15.127-23.273,15.127c-6.982,0-11.636,4.655-11.636,11.636s4.655,11.636,11.636,11.636 c12.8,0,25.6-5.818,34.909-15.127c9.309,10.473,22.109,15.127,34.909,15.127c6.982,0,11.636-4.655,11.636-11.636 S297.891,420.073,290.909,420.073z"></path>{' '}
					</g>{' '}
				</g>{' '}
				<g>
					{' '}
					<g>
						{' '}
						<path d="M320,316.509c-11.636-5.818-17.455-15.127-17.455-24.436v-34.909c0-2.327,0-3.491,1.164-4.655 c3.491,9.309,11.636,16.291,22.109,16.291c12.8,0,23.273-10.473,23.273-23.273s-10.473-23.273-23.273-23.273h-11.636 c-19.782,0-34.909,15.127-34.909,34.909v34.909c0,17.455,10.473,34.909,29.091,45.382c10.473,5.818,17.455,15.127,17.455,24.436 c0,6.982,4.655,11.636,11.636,11.636c6.982,0,11.636-4.655,11.636-11.636C349.091,344.436,338.618,326.982,320,316.509z"></path>{' '}
					</g>{' '}
				</g>{' '}
				<g>
					{' '}
					<g>
						{' '}
						<path d="M325.818,152.436c-26.764,0-51.2,6.982-69.818,19.782c-18.618-12.8-43.055-19.782-69.818-19.782 c-6.982,0-11.636,4.655-11.636,11.636s4.655,11.636,11.636,11.636c24.436,0,47.709,8.145,61.673,19.782 c1.164,0,1.164,1.164,2.327,1.164c0,0,1.164,0,1.164,1.164c1.164,0,2.327,1.164,4.655,1.164c1.164,0,3.491,0,4.655-1.164 c0,0,1.164,0,1.164-1.164c1.164,0,1.164-1.164,2.327-1.164c13.964-12.8,37.236-19.782,61.673-19.782 c6.982,0,11.636-4.655,11.636-11.636S332.8,152.436,325.818,152.436z"></path>{' '}
					</g>{' '}
				</g>{' '}
				<g>
					{' '}
					<g>
						{' '}
						<path d="M456.145,187.345c-6.982-10.473-5.818-25.6,3.491-34.909l8.146-8.145c20.945-20.945,33.745-51.2,33.745-82.618 c0-11.636-3.491-23.273-10.473-33.745C479.418,10.473,460.8,0,439.855,0c-23.273,0-45.382,8.145-62.836,23.273 c-4.655,4.655-5.818,11.636-1.164,16.291s11.636,5.818,16.291,1.164c13.964-11.636,30.255-17.455,47.709-17.455 c12.8,0,24.436,5.818,32.582,17.455c2.327,6.982,4.655,13.964,4.655,22.109c0,24.436-9.309,47.709-26.764,65.164l-8.145,8.145 c-17.455,17.455-19.782,44.218-5.818,65.164l16.291,19.782c15.127,18.618,24.436,43.055,24.436,66.327l-1.164,58.182 c0,27.927-13.964,53.527-37.236,68.655l-82.618,53.527c-23.273,15.127-48.873,22.109-76.8,22.109h-24.436H230.4 c-26.764,0-53.527-8.146-76.8-22.109l-82.618-53.527c-23.273-15.127-36.073-64-36.073-91.927v-34.909 c0-24.436,8.145-47.709,24.436-66.327l16.291-19.782c13.964-19.782,11.636-47.709-5.818-65.164L61.673,128 c-17.455-17.455-26.764-40.727-26.764-66.327c0-6.982,2.327-13.964,6.982-19.782c6.982-11.636,18.618-17.455,31.418-17.455 c17.455,0,34.909,5.818,47.709,17.455c4.655,4.655,12.8,3.491,16.291-1.164c4.655-4.655,3.491-12.8-1.164-16.291 C118.691,9.309,96.582,1.164,73.309,1.164c-20.945,0-39.564,10.473-51.2,27.927c-6.982,10.473-10.473,20.945-10.473,33.745 c0,30.255,12.8,60.509,33.745,81.455l8.145,8.145c9.309,9.309,10.473,24.436,3.491,33.745l-16.291,19.782 c-18.618,23.273-29.091,52.364-29.091,81.455v34.909c0,36.073,16.291,91.927,46.545,111.709l82.618,53.527 c26.764,17.455,57.018,25.6,88.436,25.6h24.436h25.6c31.418,0,62.836-9.309,88.436-25.6l82.618-53.527 c30.255-19.782,47.709-52.364,47.709-88.436l1.164-58.182c1.164-30.255-9.309-58.182-27.927-81.455L456.145,187.345z"></path>{' '}
					</g>{' '}
				</g>{' '}
				<g>
					{' '}
					<g>
						{' '}
						<path d="M430.545,36.073c-6.982,0-11.636,4.655-11.636,11.636s4.655,11.636,11.636,11.636S442.182,64,442.182,70.982 s4.655,11.636,11.636,11.636s11.636-4.655,11.636-11.636C465.455,51.2,450.327,36.073,430.545,36.073z"></path>{' '}
					</g>{' '}
				</g>{' '}
				<g>
					{' '}
					<g>
						{' '}
						<path d="M393.309,96.582c-11.636-16.291-25.6-30.255-40.727-41.891C323.491,34.909,290.909,24.436,256,24.436 c-34.909,0-67.491,10.473-95.418,30.255c-16.291,11.636-30.255,25.6-41.891,41.891c-3.491,5.818-2.327,12.8,3.491,16.291 c2.327,1.164,4.655,2.327,6.982,2.327c3.491,0,6.982-2.327,9.309-4.655c9.309-13.964,22.109-25.6,34.909-36.073 C197.818,57.018,225.745,47.709,256,47.709c30.255,0,58.182,9.309,82.618,26.764c13.964,9.309,25.6,22.109,34.909,36.073 c2.327,3.491,5.818,4.655,9.309,4.655c2.327,0,4.655-1.164,6.982-2.327C395.636,109.382,396.8,102.4,393.309,96.582z"></path>{' '}
					</g>{' '}
				</g>{' '}
				<g>
					{' '}
					<g>
						{' '}
						<path d="M81.454,36.073c-19.782,0-34.909,15.127-34.909,34.909c0,6.982,4.655,11.636,11.636,11.636s11.636-4.655,11.636-11.636 s4.655-11.636,11.636-11.636s11.636-4.655,11.636-11.636S88.436,36.073,81.454,36.073z"></path>{' '}
					</g>{' '}
				</g>{' '}
			</g>
		</svg>
	),
};