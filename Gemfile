source "https://rubygems.org"

# Matches the exact Jekyll + plugin versions GitHub Pages runs.
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Needed to run `jekyll serve` on Ruby 3+
gem "webrick", "~> 1.8"

# Windows / JRuby helpers
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.1", platforms: [:mingw, :x64_mingw, :mswin]
