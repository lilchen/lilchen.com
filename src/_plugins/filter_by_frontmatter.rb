module Jekyll
  module CustomFrontmatterFilter
    # Returns back filtered list of posts based on custom frontmatter data types
    # Usage: {{ site.posts | filter_by_frontmatter:'subcategories','design' }}
    # => Returns all posts with the frontmatter 'subcategories' containing 'design'
    def filter_by_frontmatter(posts, frontmatter, type)
      filtered = []
      for post in posts
        if post.data[frontmatter]
          filtered.push(post) if post.data[frontmatter].include? type
        end
      end
      filtered
    end
    # Returns back list of unique values based on custom frontmatter data types
    # Usage: {{ site.posts | list_by_frontmatter:'subcategories' }}
    # => Returns unique values in the frontmatter 'subcategories'
    def list_by_frontmatter(posts, frontmatter)
      filtered = []
      for post in posts
        if post.data[frontmatter]
          filtered = filtered + post.data[frontmatter]
        end
      end
      filtered.sort.uniq
    end
  end
end
Liquid::Template.register_filter(Jekyll::CustomFrontmatterFilter)