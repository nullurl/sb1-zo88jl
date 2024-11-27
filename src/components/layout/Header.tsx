import Link from 'next/link';
import LanguageSelector from './navigation/LanguageSelector';
import MainNav from './navigation/MainNav';

export default function Header() {
  return (
    <header className="bg-primary shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-accent transition-colors">
            Corepunk Wiki
          </Link>
          <MainNav />
          <LanguageSelector />
        </div>
      </nav>
    </header>
  );
}