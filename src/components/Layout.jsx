import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
return (
    <div>
        <Head>
            <title>鬼滅力診断</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta name='description' content="10問のクイズに答えてあなたの鬼滅力を診断しましょう!問題に正解して全50問の解放を目指しましょう。" />
            <meta name='keywords' content="鬼滅の刃 クイズ 診断 問題" />
        </Head>
        <Header />
            {children}
        <Footer />
    </div>
    );
}

export default Layout;