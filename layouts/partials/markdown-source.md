{{- /* Page source as plain Markdown: shortcode tags are stripped (their inner text is kept).
       Uses .RawContent rather than .RenderShortcodes, which corrupts the HTML output on
       hugo server rebuilds when shortcodes have per-format templates. */ -}}
{{- . | replaceRE `(?s)\{\{<\s*/?\s*[a-z-]+.*?>\}\}` "" | replaceRE `(?s)\{\{%\s*/?\s*[a-z-]+.*?%\}\}` "" -}}
