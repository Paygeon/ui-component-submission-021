import mongoose from 'mongoose';

const exampleSchema = new mongoose.Schema({
  nameOfPage: String,
  urlToPage: String,
  descriptionOfUsage: String,
  imageSrcOfUsage: String
});

const faqSchema = new mongoose.Schema({
  question: String,
  answer: String
});

const productSchema = new mongoose.Schema({
  componentName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  hasImage: {
    type: Boolean,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  hasComponentCode: {
    type: Boolean,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  techStack: {
    type: [String],
    required: true
  },
  examples: [exampleSchema],
  faq: [faqSchema],
  metaDescription: {
    type: String,
    required: true
  },
  metaTitle: {
    type: String,
    required: true
  },
  license: {
    type: String,
    required: true
  },
  markdown: {
    type: String,
    required: true
  },
  typescript: {
    type: String,
    required: true
  }
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
