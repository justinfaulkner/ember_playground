class Table < ActiveRecord::Base
  attr_accessible :name

  has_many :tabs
end
