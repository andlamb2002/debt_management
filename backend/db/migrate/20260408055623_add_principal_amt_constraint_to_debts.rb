class AddPrincipalAmtConstraintToDebts < ActiveRecord::Migration[8.1]
  def change
    add_check_constraint :debts, "principal_amt > 0"
  end
end
