const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Wildopedia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
